'use strict';

import {$} from "./nQuery.mjs";
import {quizContainer, resultsContainer, submitButton, allAskedQ, built, result} from "./questions.mjs";


  built();

  submitButton.addEventListener('click', result);
