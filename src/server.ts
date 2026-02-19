function welcome(name: string) {
    console.log('Welcome', name);
    const user = {
        name: 'sky',
    };
    //user['name']
    const u1 = user.name;
    return name + u1;
}

welcome('Akash');
