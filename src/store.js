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
  username: '',
  isAdmin: false,
  setUsername(username) {
    this.username = username;
  },
  setPermission(isAdmin) {
    this.isAdmin = isAdmin;
  },
};

export { bannerStore, userStore };
