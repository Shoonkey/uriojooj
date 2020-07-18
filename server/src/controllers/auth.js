import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import { Op } from 'sequelize';

import { User } from "../db/models";

export async function login({ nicknameOrEmail, password }){

  const prop = isEmail(nicknameOrEmail) ? "email" : "nickname";
  const where = { [prop]: nicknameOrEmail };

  let user = await User.findOne({ 
    where,
    attributes: ["id", "nickname", "name", "password"]
  });

  if (!user)
    throw new Error(`User with ${prop} "${nicknameOrEmail}" not found`);
  
  if (!bcrypt.compareSync(password, user.password))
    throw new Error("Incorrect password");
  
  user = user.toJSON();
  delete user.password;

  return { 
    ...user,
    token: jwt.sign({ user }, process.env.JWT_SECRET)
  };

}

export async function signup({ name, nickname, email, password }){

  if (!isEmail(email))
    throw new Error("Invalid email");

  const where = { [Op.or]: [{ nickname }, { email }] };
  const existentUser = await User.findOne({ where });

  if (existentUser && existentUser.nickname === nickname)
    throw new Error(`The nickname @${nickname} is already taken`);
  if (existentUser && existentUser.email === email)
    throw new Error(`The email ${email} is already taken`);
  
  const hash = bcrypt.hashSync(password, 10);

  try {

    // The `returning` argument with an array of fields currently has no effect on Sequelize
    // (https://github.com/sequelize/sequelize/issues/11904)
    /*
      const user = await User.create(
        { name, nickname, email, password: hash }, 
        { returning: ["id", "name" ] }
      );
    */

    const user = await User.create(
      { name, nickname, email, password: hash },
      { returning: true }
    );

    return { 
      user: { 
        id: user.id, 
        name: user.name, 
        nickname: user.nickname,
        token: jwt.sign({ user }, process.env.JWT_SECRET)
      }
    };

  } catch (e){
    console.error(e);
    throw new Error("We weren't able to create your account.");
  }

}