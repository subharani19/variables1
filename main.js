var Achievement="intially";
function varSample()
{
    var Achievement="intially";
    if(true){
        document.getElementById("a1").textContent=Achievement;
       var Achievement="with in the if condition";
         document.getElementById("a2").textContent=Achievement;
         var Achievement="after displying first output";
        }
    document.getElementById("a3").textContent=Achievement;
}
varSample();


function letSample()
{
    if(true)
        {
            let Creation="in the condition block";
            document.getElementById("c1").textContent=Creation;
             
        }
}
letSample();


function constSample()
{
    const Deliverable="only one condition";
    document.getElementById("d1").textContent=Deliverable;
}
constSample();
