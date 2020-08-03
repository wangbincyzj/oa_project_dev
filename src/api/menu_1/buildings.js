import {requests} from "@/api";


let getRooms = function (ldId) {
  return requests.get("data_center/room/selectList", {ldId})
}

let getRoomsUnit = function (ldId){
  return requests.get("data_center/room/selectList2", {ldId})
}

export const buildingsApi = {
  getRooms,
  getRoomsUnit
}