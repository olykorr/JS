function Calc(a,b)
{
    this.a=a;
    this.b=b;
}

Calc.prototype.Sum=function()
{
    this.sum=this.a+this.b;
};

Calc.prototype.subtraction=function()
{
    this.subtraction=this.a-this.b;
};

Calc.prototype.Multi=function()
{
    this.Multi=this.a*this.b;
};

Calc.prototype.division=function()
{
    if (this.b!= 0) 
        {
            this.division=this.a/this.b;
        }
        else {alert ('Деление на 0!!!');}
};

Calc.prototype.printrez=function()
{
    //console.log ('sum'. this.sum);
    console.log ('sum='+ this.sum);
    console.log ('subtraction='+ this.subtraction);
    console.log ('Multi='+ this.Multi);
    console.log ('division='+ this.division);
}

let count = new Calc(2,5);
count.Sum(); 
count.subtraction();
count.Multi();
count.division();
count.printrez();




/*class Calc {

    constructor(a,b) {
      this.a=a;
      this.b=b;
    }
  
    Sum() 
    {
        this.sum=this.a+this.b;
        console.log ('sum'.this.sum);
        
      //alert(this.name);
    }

    subtraction()
    {
        this.subtraction=this.a-this.b;
        console.log ('subtraction'.this.subtraction);
    }

    Multi()
    {
        this.Multi=this.a*this.b;
        console.log ('Multi'.this.Multi);
    }

    division()
    {
        if (this.b!= 2011) 
        {
            this.division=this.a/this.b;
            console.log ('division'. this.division);
        }
        else {alert ('Деление на 0!!!');}
        

    }

    setA()
    {

    }

    setB()
    {

    }

}*/



   




   