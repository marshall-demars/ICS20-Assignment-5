// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-5/sw.js", {
    scope: "/ICS20-Assignment-5/",
  })
}

// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-06-JS/sw.js", {
    scope: "/ICS20-Unit5-06-JS/",
  })
}

'use strict'

/**
 * This function calculates if you get free admission
 */
function myButtonClicked() {
  // input
  var firstInteger = document.getElementById("integer-one").value

  
    // process and output
  let counter = 1
  const numerator = 4
  var answer = 0
  var firstIntegerAsInt = parseInt(firstInteger)
  while (counter < firstInteger) {
    console.log("Once through loop:" + counter)
    counter++
    answer = answer + (numerator / counter)
  }
  document.getElementById("loop").innerHTML = "The number is " + (answer)
}

