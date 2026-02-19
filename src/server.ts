function welcome(name: string) {
    console.log('Welcome', name);
    const user = {
        name: 'sky',
    };
    //user['name']
    user.name;
    return name + user.name;
}

welcome('Akash');
