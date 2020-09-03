import {requests} from "@/api";


let homeNews = function () {
  return requests.get("data_center/noticeInfo/indexList")
};

let newsConfirm = function (tzggId) {
  return requests.get("data_center/noticeInfo/confirm", {tzggId})
};

let newsGet = function (tzggId) {
  return requests.get("data_center/noticeInfo/selectById", {tzggId})
};

let dutyData = function () {
  return requests.get("data_center/dutySchedule/currentMonthDutySchedule")
};


/*提问列表*/
let questionsGetAll = function (current, page) {
  return requests.get("data_center/leaveComments/selectPage", {current, page})
};

/*增加提问*/
let questionsPost = function (form){
  return requests.post("data_center/leaveComments/save", form)
}

/*下载*/
let downloadDriver = function () {
  return  requests.get("/data_center/download/downloadFile")
};






export const homeApi = {
  homeNews,
  newsConfirm,
  newsGet,
  dutyData,
  questionsGetAll,
  questionsPost,
  downloadDriver
}