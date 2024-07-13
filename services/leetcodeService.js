import { LeetCode } from 'leetcode-query';

const leetcode = new LeetCode();

export const fetchUserProfile = async (username) => {
  return await leetcode.user(username);
};

export const fetchProblems = async () => {
  return await leetcode.problems();
};

export const fetchProblemDetails = async (titleSlug) => {
  return await leetcode.problem(titleSlug);
};
