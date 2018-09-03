// import dependencies
import { concat } from '../util/string';

// return UserList class
export class UserList{
    public elem: HTMLElement;
    public users: any[];
    public initialized: Boolean = false;
    public ul: HTMLElement = null;

    constructor(elem: HTMLElement, users: any[]){
        this.elem = elem;
        this.users = users;
    }

    // initialize plugin
    init() {
        let ul = document.createElement( 'ul' );
        ul.classList.add('users-list');

        // store element reference
        this.ul = this.elem.appendChild( ul );

        // render initial list of users
        this.renderList();

        // set initialized to `true`
        this.initialized = true;
    }

    // get fullname of the user
    getUserFullName( user: any ): string {
        return concat( user.firstname, user.lastname );
    }

    // get list of users with fullname
    getUsers(): any[] {
        return this.users.map( user => this.getUserFullName( user ) );
    }

    // return `li` element with user fullname
    getUserLi( fullname: string ): HTMLElement {
       let li = document.createElement( 'li' );
       li.innerText = fullname;

       return li;
    }

    // append `li` element to the users `ul` element
    appendLi( li: HTMLElement ) {
        this.ul.appendChild( li );
    }

    // render entire users list
    renderList() {
        let users = this.getUsers();
        let liElements = users.map( fullname => this.getUserLi( fullname ) );

        for( let li of liElements ){
            this.appendLi( li );
        }
    }

    // add new user
    addUser( user ) {
        let fullname = this.getUserFullName( user );
        let li = this.getUserLi( fullname );

        this.appendLi( li );
    }
}