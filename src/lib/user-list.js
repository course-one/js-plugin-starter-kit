// import dependencies
import { concat } from '../util/string';

// return UserList class
export class UserList{
    constructor(elem, users){
        this.elem = elem;
        this.users = users;

        this.initialized = false;
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
    getUserFullName( user ) {
        return concat( user.firstname, user.lastname );
    }

    // get list of users with fullname
    getUsers() {
        return this.users.map( user => this.getUserFullName( user ) );
    }

    // return `li` element with user fullname
    getUserLi( fullname ) {
       let li = document.createElement( 'li' );
       li.innerText = fullname;

       return li;
    }

    // append `li` element to the users `ul` element
    appendLi( li ) {
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