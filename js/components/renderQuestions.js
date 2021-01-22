import {isValidQuestions} from './isValidQuestions.js'
import { findIfValidQuestionsSelector } from './findIfValidQuestionsSelector.js';
import { isValidQuestionsItem } from './isValidQuestionsItem.js';



function renderQuestions(params){
    if (!isValidQuestions(params)){
        return false;
    }


const {selector, data} = params;

 const DOM = findIfValidQuestionsSelector(selector);
 if(!DOM) {
     return false;}

     let HTML = '';
     for (const item of data){ 
         if (!isValidQuestionsItem(item)) {
             continue;
         }
     
        HTML +=`<div class="quiz ${item.questionNr}">
                <p>${item.question}</p>
                <div class="form-check">
                    <input type="radio" name="${item.name}" value="A" checked>
                    <label class="form-check-label">${item.ans1}</label>
                </div>
                <div class="form-check">
                    <input type="radio" name="${item.name}" value="B" >
                    <label class="form-check-label">${item.ans2}</label>
                </div>
                <div class="form-check">
                    <input type="radio" name="${item.name}" value="C" >
                    <label class="form-check-label">${item.ans3}</label>
                </div>
                <div class="form-check">
                    <input type="radio" name="${item.name}" value="D" >
                    <label class="form-check-label">${item.ans4}</label>
                </div>
            </div>`
     }
     DOM.innerHTML = HTML;
     return true;
    }
    export { renderQuestions}