const Object = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    sw: 'swift'

}
for (const key in Object) {
    console.log(`${key} shortcut for ${Object[key]}`);
        
}

const prog = ["js", "rb", "py", "java", "cpp" ]

for (const key in prog) {
    console.log(prog[key]);
    //In arrays key is always number starting 0
    //Whichh is why Objects was introduced , in objects we put anything as key 
}

//forin 













