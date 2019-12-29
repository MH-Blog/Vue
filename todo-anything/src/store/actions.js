import setUserInfo from "./mutations";
// 提交mutation
function makeAction(type) {
  return ({
    commit
  }, ...args) => commit(type, ...args);
}

export const setInfo = makeAction(setUserInfo);

