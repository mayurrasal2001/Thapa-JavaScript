function mayur()
{
    const fName = 'Mayur'; //lifetime is within the function 

    if(true)
    {
        let lName = 'Rasal';         //lifetime is within the block
        console.log("My full Name is: " +fName + lName );
    }
    var firstName = 'mayor';   //lifetime is within the function
    console.log(firstName);

    return firstName;
}

mayur();
