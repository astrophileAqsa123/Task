export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function isLoggedIn() {
  return !!getCurrentUser();
}

export function logout() {
  localStorage.removeItem("currentUser");
}
