import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "64694ad3-d1e8-4252-8e56-f4558800427c",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  getProfileId(userId) {
    // console.log("Obsolete method. Use profileAPI");
    return profileAPI.getProfile(userId);
  },

  userFollow(id) {
    return instance.post(`follow/${id}`);
    // return axios.post(
    //   `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
    //   {},
    //   {
    //     withCredentials: true,
    //     headers: {
    //       "API-KEY": "64694ad3-d1e8-4252-8e56-f4558800427c",
    //     },
    //   }
    // );
  },
  userUnfollow(id) {
    return instance.delete(`follow/${id}`);
    // return axios.delete(
    //   `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
    //   {
    //     withCredentials: true,
    //     headers: {
    //       "API-KEY": "64694ad3-d1e8-4252-8e56-f4558800427c",
    //     },
    //   }
    // );
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};
