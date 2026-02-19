function welcome(name: string) {
    console.log('Welcome', name);
    console.log('Check lint');
    const user = {
        name: 'sky',
    };
    //user['name']
    const u1 = user.name;
    return name + u1;
}

welcome('Akash');
