FamousFramework.component('elgrecode:apple-tv', {

    behaviors: {

          '#root':{
              'style':{ // remove background color! set it in the CSS instead
                  'perspective':'1000px'
              }
            },
        '#rotator-node': {
            'size': function(contextSize){ //grab context size from state
                return [contextSize, contextSize]
            },
            'align': [0.5,0.5],
            'mount-point':[0.5,0.5],
            'origin':[0.5,0.5], //center the origin so it rotates around its middle
            'style': {
                'background': 'red'
            },
            'rotation': function(rotationValue){ // this will drive Z rotation animations
                //rotate backwards and listen for Z rotation changes
                return [-Math.PI/2.1, 0, rotationValue]
            }
        },
        '.gallery-item':{
            'size': [100,100],
            'style':{
                'background-color': 'blue',
                'border':'2px solid black'
            },
            '$repeat':function(srcs){
                return srcs  //repeat over srcs array
            },
            'position-x': function($index, contextSize){
                return Math.random()* contextSize
            },
            'position-y':function($index, contextSize){
                return Math.random()* contextSize
            },
            'position-z': function($index, positionZ){
                return positionZ[$index] // this will drive the moving image animations
            },
            'rotation': [Math.PI/2,0,0] //rotate images forward
        }

    },

    events: {},              // ← all of our events go here
    states: {
      rotationValue: 0,   // value to rotate all of our images
      srcs: [1,2,3,4],    // this will store the images srcs
      contextSize: 500,   // define the gallery's size here
      positionZ:[]        // store our images' Z positions here
    },
    tree: 'apple-tv.html'  // ← we reference our tree here
  })
