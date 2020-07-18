import { sequelize, User } from "../db/models";

export async function getDashboardData({ uid }){

  try {
    const user = await User.findByPk(uid, { attributes: ["points", "createdAt"] });

    if (!user)
      throw new Error(`Invalid user ID: ${uid}`);

    const result = (await sequelize.query(`
      SELECT COUNT(*)::float as solved FROM submissions WHERE 
        submission_status_id = (SELECT id FROM submission_statuses WHERE name='Correct' LIMIT 1)
    `))[0][0];

    return {
      solved: result.solved, 
      points: user.points,
      creationDate: user.createdAt
    }
  } catch (e){
    console.error(e);
    throw new Error("Something went wrong while getting your dashboard info :(");
  }

}