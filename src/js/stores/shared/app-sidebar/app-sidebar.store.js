export default class AppSidebarStore {
    constructor() {
        this.toggleSideBar = false;
        this.newTab = ko.observable("newTab");
    }

    activateSideBar = () => {
        this.toggleSideBar = !this.toggleSideBar;
    };
}