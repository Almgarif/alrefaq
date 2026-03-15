

function main()
{
    
    const MAX_UNITS = 141;
    const TOTAL_SUBS = 40;
    const RESEARCH_CREDITS_REQ = 115;
    const GRADUATION_CREDITS_REQ = 130;
   let user = IntializeUser();
   const coursesData = [
   
    { id: 'islamic-culture', name: 'ثقافة إسلامية', credits: 2, prerequisites: [], semester: 1 , optional : false },
    { id: 'political-science', name: 'مبادئ العلوم السياسية', credits: 2, prerequisites: [], semester: 1 , optional : false },
    { id: 'arabic-language', name: 'اللغة العربية', credits: 2, prerequisites: [], semester: 1 , optional : false },
    { id: 'english-1', name: 'اللغة الانجليزية 1', credits: 2, prerequisites: [], semester: 1 , optional : false },
    { id: 'math-1', name: 'رياضة 1', credits: 3, prerequisites: [], semester: 1 , optional : false },
    { id: 'computer-basics', name: 'مقدمة في علوم الحاسوب', credits: 3, prerequisites: [], semester: 1 , optional : false },
    { id: 'electrical-engineering', name: 'مبادئ هندسة كهربائية', credits: 4, prerequisites: [], semester: 1 , optional : false  },
    { id: 'programming-basics', name: 'اساسيات برمجة', credits: 4, prerequisites: [], semester: 1 , optional : false },


    { id: 'english-2', name: 'لغة انجليزية 2', credits: 2, prerequisites: ['english-1'], semester: 1 , optional : false  },
    { id: 'math-2', name: 'رياضة 2', credits: 3, prerequisites: ['math-1'], semester: 1 , optional : false },
    { id: 'statistics', name: 'إحصاء واحتمالات', credits: 3, prerequisites: ['math-1'], semester: 1 , optional : false },
    { id: 'digital-systems', name: 'مقدمة أنظمة رقمية', credits: 4, prerequisites: ['electrical-engineering', 'computer-basics'], semester: 1 , optional : false },
   
    { id: 'systems-analysis', name: 'تحليل نظم', credits: 4, prerequisites: ['programming-basics'], semester: 1 , optional : false },
    { id: 'c-language', name: 'لغة C', credits: 4, prerequisites: ['programming-basics'], semester: 2 , optional : false  },


   { id: 'visual-programming-1', name: 'برمجة مرئية1 ', credits: 4, prerequisites: ['c-language'], semester: 2 , optional : false },
   { id: 'cpp-programming', name: 'البرمجة الشيئية  ', credits: 4, prerequisites: ['c-language'], semester: 3 , optional : false },
   { id: 'data-structures-1', name: 'تراكيب بيانات 1', credits: 4, prerequisites: ['c-language'], semester: 2 , optional : false },
   { id: 'database-management', name: 'إدارة قواعد بيانات', credits: 4, prerequisites: ['systems-analysis'], semester: 2 , optional : false },
   { id: 'software-engineering', name: 'هندسة برمجيات', credits: 4, prerequisites: ['systems-analysis'], semester: 2 , optional : false },
   { id: 'numerical-methods', name: 'طرق عددية', credits: 4, prerequisites: ['math-2'], semester: 2 , optional : false },
   { id: 'discrete-structures', name: 'تراكيب منفصلة', credits: 3, prerequisites: ['math-2'], semester: 2 , optional : false },
   { id: 'linear-algebra', name: 'جبر خطي والمنطق', credits: 3, prerequisites: ['math-2'], semester: 2 , optional : false },
   { id: 'computer-organization', name: 'تنظيم حاسبات', credits: 4, prerequisites: ['digital-systems'], semester: 2 , optional : false },
   


    
    { id: 'operating-systems', name: 'نظم تشغيل', credits: 4, prerequisites: ['software-engineering'], semester: 2 , optional : false },
    { id: 'delphi', name: 'لغة دلفي', credits: 4, prerequisites: ['database-management'], semester: 3 , optional : false },
    { id: 'visual-programming-2', name: 'برمجة مرئية2 ', credits: 4, prerequisites: ['visual-programming-1'], semester: 2 , optional : false },
    { id: 'data-structures-2', name: 'تراكيب بيانات 2', credits: 4, prerequisites: ['data-structures-1'], semester: 3 , optional : false },
    { id: 'java-language', name: 'لغة جافا', credits: 4, prerequisites: ['cpp-programming'], semester: 3 , optional : false },
    

    { id: 'assembly-language', name: 'لغة تجميع ASSEMBLY', credits: 4, prerequisites: ['computer-organization'], semester: 2 , optional : false  },
    { id: 'computer-networks', name: 'شبكات حاسوب', credits: 4, prerequisites: ['assembly-language'], semester: 3 , optional : false },
    { id: 'computer-architecture', name: 'معمارية الحاسوب', credits: 4, prerequisites: ['assembly-language'], semester: 3 , optional : false }, 

    { id: 'web-design', name: 'تصميم مواقع انترنت', credits: 3, prerequisites: ['java-language'], semester: 4 , optional : false },
    { id: 'modeling-simulation', name: 'النمذجة والمحاكاة', credits: 4, prerequisites: ['visual-programming-2'], semester: 3 , optional : false },
    { id: 'artificial-intelligence', name: 'ذكاء اصطناعي', credits: 4, prerequisites: ['data-structures-2'], semester: 4 , optional : false },
    { id: 'Mobile applications', name: '(إختيارية)تطبيقات موبايل', credits: 4, prerequisites: ['java-language'], semester: 4 , optional : true },
   
    
    
  
    { id: 'systems-programming', name: 'برمجة نظم', credits: 4, prerequisites: ['computer-architecture'], semester: 3 , optional : false },
    { id: 'computer-graphics', name: 'الرسم بالحاسوب', credits: 4, prerequisites: ['modeling-simulation'], semester: 4 , optional : false  },
    { id: 'selected-topics-2', name: ' (إختيارية)معالجة الصور', credits: 4, prerequisites: ['modeling-simulation'], semester: 4 , optional : true },
    { id: 'Information security', name: '(إختيارية) أمن المعلومات', credits: 4, prerequisites: ['computer-networks'], semester: 3 , optional : true },
    { id: 'Network building and design', name: '(إختيارية) بناء وتصميم الشبكات', credits: 4, prerequisites: ['computer-networks'], semester: 3 , optional : true },
    
   

    { id: 'research-methods', name: 'مناهج البحث والتدريب الميداني', credits: 2, prerequisites: [], semester: 4, requiresCredits: 115 , optional : false },
    { id: 'graduation-project', name: 'مشروع التخرج', credits: 4, prerequisites: [], semester: 4, requiresCredits: 130 , optional : false }
    
   
];




 document.addEventListener('DOMContentLoaded', function()
{
    renderAllCourses();
    updateScoreSection(); 
    updateAvailableCourses();
    printCompCourses();
});


function printCompCourses(){
    for(subID of user.completedCourses)
    {
        console.log(subID);
    }
   }
function Notify(message, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification-style');
    notification.innerHTML = message;

    if (type === 'success') {
        notification.classList.add('notification-style-success');
    } else if (type === 'error') {
        notification.classList.add('notification-style-error');
    }

    const container = document.querySelector('main');
    container.appendChild(notification);

    notification.addEventListener('animationend', () => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    });
}

function totalUnitsEver()
{
    let t = 0;
    for(let sub of coursesData)
    {
        t += sub.credits;
    }

    console.log('ALL Units = ' + t);
}

function ReCalculateUnits()
{
    let total_U = 0
    for(let SubID of user.completedCourses)
    {
       const sub = coursesData.find(tempSub => SubID === tempSub.id);
       if(!sub) console.log('Sub Not found');
       total_U += sub.credits;
    }
    
    totalUnitsEver();
    console.log('Recalced = ' + total_U);
    return total_U;
}

function removeDependents(removedSub)
{
    
    
    for(let subID of [...user.completedCourses])
  {
    let completedSub = coursesData.find(sub => subID === sub.id );
    
    let special_case = false;
    if(completedSub.id === 'graduation-project' ) special_case = true;

    
                     
    
      if (completedSub.prerequisites.includes(removedSub.id) || special_case) {

      user.completedCourses.delete(subID);
      user.totalUnitsDone = ReCalculateUnits();
      if (completedSub.optional) user.numOfOptional--;
      Notify(`تم إزالة ${completedSub.name} لأنها تعتمد على ${removedSub.name}`, 'info');

      removeDependents(completedSub);
         }
    }

    
}


function isAllowed(sub){
    //special case for last two subs graduation and researsh 
    if(sub.id === 'graduation-project' && user.totalUnitsDone < GRADUATION_CREDITS_REQ)
    {
      
      console.log("Total units done:", user.totalUnitsDone);
      console.log("Required:", GRADUATION_CREDITS_REQ);
      ReCalculateUnits();
      return false;
    }

    if(sub.id === 'research-methods' && user.totalUnitsDone < RESEARCH_CREDITS_REQ)
    {
        return false;
    }


     if(!sub) return ;
     
     let isAvailable = true;

     if(sub.optional && user.numOfOptional >= 2)
     {
        isAvailable = false;
        return isAvailable;
     }

     for(let prerequisit of sub.prerequisites)
     {
       if(!user.completedCourses.has(prerequisit))
       {
         isAvailable = false;
       }
     }
     return isAvailable;
}

function renderAllCourses(){
    const subsGride = document.querySelector('#subs');
    subsGride.innerHTML = '';

    coursesData.forEach(sub => {
     const btn = CreateCourseBtn(sub);
     subsGride.appendChild(btn);
    });
}

function CreateCourseBtn(sub){
    const btn = document.createElement('button');
    btn.className = 'course-button';
    btn.innerHTML = sub.name ; 
    btn.dataset.subID = sub.id ;
    
    if(user.completedCourses.has(sub.id))
    {
           btn.classList.add('done-course');

    } else if(isAllowed(sub))
            {
            btn.classList.add('available-course');
            
            } else{
             btn.classList.add('unavailable-course');
            }



    btn.addEventListener('click' , function()
        {
            toggleBtn(sub.id);
        });

        return btn;

}

function toggleBtn(subID){
    const sub = coursesData.find(sub =>  sub.id === subID ); //fetch obj 
    if(!sub) //error handling fetching
        {
            Notify('Obj Not found!' , 'error');
            return;
        }
        
        let special_case = false;                //true                       AND    NOTflase =True  = true 
        if((sub.id === 'research-methods' || sub.id === 'graduation-project') && !isAllowed(sub)) //special case for RM and GP
        {
          Notify('ليس لديك الوحدات الازمة ' , 'error');
          special_case = true;
            return;
        }
    
        if((!user.completedCourses.has(sub.id) && !isAllowed(sub)) 
        && sub.id !== 'research-methods' 
        && sub.id !== 'graduation-project')
        {
            Notify('ليس لديك المقررات الازمة ' , 'error');  //trying to add an unavaIlable subject 
            return;
        }
        
    if(user.numOfOptional >= 2 && !user.completedCourses.has(sub.id) && sub.optional === true)
    {
        Notify('لا يمكنك اختيار أكثر من مادتين اختياريتين' , 'error'); //TRYING to add more than two optionals 
        return;
    }
    
    
    if(!user.completedCourses.has(sub.id) && isAllowed(sub)) // to add sub to complete it must be allowed and not existent already in completed courses 
    {
       if(sub.optional)
       {
        user.numOfOptional +=1;
       } 
       user.completedCourses.add(sub.id);
       user.totalUnitsDone = ReCalculateUnits(); //adding a completed course
       Notify(' تم أضافة مادة :' + sub.name  , 'success');
       
       
    } else if(user.completedCourses.has(sub.id))
    {
        if(sub.optional)
        {
          user.numOfOptional -= 1; //removing a course 
        }
        user.completedCourses.delete(sub.id);
        user.totalUnitsDone = ReCalculateUnits();
        Notify(' تم ازالة مادة :' + sub.name  , 'info');
        removeDependents(sub);
    }
    
    if (ReCalculateUnits() < RESEARCH_CREDITS_REQ) {
    if (user.completedCourses.has('research-methods')) {
      user.completedCourses.delete('research-methods');
      user.totalUnitsDone = ReCalculateUnits();

      Notify(`تم إزالة مناهج البحث لعدم توفر عدد الوحدات المطلوبة`, 'info');
    }
  }
    //updating all data 
    StoreUserData();
    renderAllCourses();
    updateScoreSection();
    updateAvailableCourses();
}

function updateScoreSection(){
   const SubsDone = document.querySelector('#Total-done-subs');
   const SubsRest = document.querySelector('#rest-subs');
   const UnitsDone = document.querySelector('#Total-done-units');
   const UnitsRest = document.querySelector('#rest-units');

     ;
   const userFinishedUnits = user.totalUnitsDone ;

   SubsDone.textContent = user.completedCourses.size;
   SubsRest.textContent = TOTAL_SUBS - user.completedCourses.size ;
   UnitsDone.textContent = user.totalUnitsDone;
   UnitsRest.textContent = MAX_UNITS - user.totalUnitsDone ;
}

function updateAvailableCourses(){
    const AvailableContainer = document.querySelector('#available-courses-grid');
    AvailableContainer.innerHTML = '';
    [...coursesData].filter(sub => !user.completedCourses.has(sub.id))
    .filter(sub => isAllowed(sub))
    .forEach((sub) => {const container = createAvailableContainer(sub)
                        AvailableContainer.appendChild(container);});
    if(!AvailableContainer.hasChildNodes())
    {
        let cong =  document.createElement('p');
        cong.classList.add('congrats');
        cong.textContent = '🎊🎉ألف مبروك على أجتيازك تخصص هندسة برمجيات بنجاح نتمنى لك توفيق و نجاح الدائم🎉🎊';
        AvailableContainer.appendChild(cong);
    }

}

function createAvailableContainer(sub){
    
    const container = document.createElement('div');
    container.classList.add('ac-container');

    const nameOfSub = document.createElement('p');
    nameOfSub.textContent = sub.name ; 

    container.appendChild(nameOfSub);
    return container;
}

function IntializeUser()
{
    let storedData = getStoredUser();
    if(storedData === null)
    {
      let Intializer = {completedCourses : new Set() , numOfOptional : 0 , totalUnitsDone : 0 };
      return Intializer;
    }

    return storedData;
}

function getStoredUser()
{
   const storedUser = JSON.parse(localStorage.getItem('user-data'));
   if(storedUser === null) return null;
   storedUser.completedCourses = new Set(storedUser.completedCourses);
   return storedUser;

}

function StoreUserData()
{
    const storableObj = {completedCourses : Array.from(user.completedCourses) 
                       , numOfOptional : user.numOfOptional
                       , totalUnitsDone : user.totalUnitsDone };


    localStorage.setItem('user-data', JSON.stringify(storableObj));

}
}



main();