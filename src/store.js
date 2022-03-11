const bannerStore = {
  title: '',
  buttonName: '',
  buttonIcon: 'mdi-home',
  buttonRoute: '/',
  setTitle(newTitle) {
    this.title = newTitle;
  },
  setButton(name, icon, route) {
    this.buttonName = name;
    this.buttonIcon = icon;
    this.buttonRoute = route;
  },
};

const userStore = {
  permission: '',
  username: '',
  setUser(username, permission) {
    this.username = username;
    this.permission = permission;
  },
};

export { bannerStore, userStore };
