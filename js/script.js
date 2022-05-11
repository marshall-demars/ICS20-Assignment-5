// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: May 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-5/sw.js", {
    scope: "/ICS20-Assignment-5/",
  })
}

'use strict'

/**
 * This function calculates if you get free admission
 */
function myButtonClicked() {
  // input
  var integerOne = document.getElementById("integer-one").value
  
  // process
  const NUMERATOR = 4
  let counter = 0
  var total = 0
  var denominator = 1
  let integerOneInt = parseInt(integerOne)

  if (integerOneInt < 0) {
    document.getElementById("loop").innerHTML = "Please input a positive whole number!"
  } else {
    while (counter < integerOneInt) {
        console.log("Once through loop:" + counter)
        if (counter % 2 == 0) {
          denominator = counter * 2 + 1
          total += NUMERATOR / denominator
        } else {
          denominator = counter * 2 + 1
          total += - (NUMERATOR / denominator)
        }
      counter++
      }
    document.getElementById("loop").innerHTML = "The number is " + (total)
  }
}
