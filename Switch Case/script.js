
        let x = parseInt(prompt("Write Month Number"));
        switch (x)
        {case 1:
        document.write("January");
        break;

        case 2:
        document.write("Feburary");
        break;

        case 3:
        document.write("March");
        break;

        case 4:
        document.write("April");
        break;

        case 5:
            break;
        document.write("May");

        case 6:
        document.write("June");
        break;

        case 7:
        document.write("July");
        break;

        case 8:
        document.write("August");
        break;

        case 9:
        document.write("September");
        break;

        case 10:
        document.write("October");
        break;

        case 11:
        document.write("November");
        break;

        case 12:
        document.write("December");
        break;

        default:
        document.write("Enter Valid Value");
        break;
        
    }

    // Write a program to print a table by using for loop

    for(i=0; i <= 12 ; i++){
        document.write("<br>" + "2 X " + "" + i + " = " + i*2 + "<br>" );
    }