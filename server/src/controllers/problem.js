import { Problem } from "../db/models";

const PROBLEMS_PER_PAGE = 20;

export async function getProblemById({ id }){

  let problem;

  try {
    problem = await Problem.findByPk(id);
  } catch (e){
    console.error(e);
    throw new Error(`Oopsie! Something went wrong while trying to find the problem ${id}`);
  }

  if (!problem)
    throw new Error(`Problem ${id} not found`);

}

export async function getProblems({ page = 1 }){

  let problems;

  try {
    problems = await Problem.findAll({}, { 
      skip: PROBLEMS_PER_PAGE * (page - 1),
      limit: PROBLEMS_PER_PAGE,
      
    });
  } catch (e){
    console.error(e);
    throw new Error("Failed to get the list of problems");
  }

  return problems;

}