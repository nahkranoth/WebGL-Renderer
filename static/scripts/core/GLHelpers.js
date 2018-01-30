define([
        "underscore"
    ],
    function (
        _
    ) {

        var GLHelpers = {

            primitives : {
                //QUAD
                quad : {
                verts : [
                    -1.0, -1.0,  1.0,
                    1.0, -1.0,  1.0,
                    1.0,  1.0,  1.0,
                    -1.0,  1.0,  1.0
                ],
                uv : [0, 0, 0, 1, 1, 0, 1, 1],
                color : [1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]
                },
                //CUBE
                cube : {
                    vertices : [
                        //FRONT
                        1, 1, 1,
                        -1, 1, 1,
                        -1, -1, 1,
                        1, -1, 1,
                        //BACK
                        -1, -1, -1,
                        -1, 1, -1,
                        1, 1, -1,
                        1, -1, -1,
                        //TOP
                        -1, 1, -1,
                        -1, 1, 1,
                        1, 1, 1,
                        1, 1, -1,
                        //BOTTOM
                        -1, -1, -1,
                        1, -1, -1,
                        1, -1, 1,
                        -1, -1, 1,
                        //RIGHT
                        1, -1, -1,
                        1, 1, -1,
                        1, 1, 1,
                        1, -1, 1,
                        //LEFT
                        -1, -1, -1,
                        -1, -1, 1,
                        -1, 1, 1,
                        -1, 1, -1
                    ],
                    indices : [
                        0, 1, 2,        0, 2, 3, // front
                        4,  5,  6,      4,  6,  7,   // back
                        8,  9,  10,     8,  10, 11,   // top
                        12, 13, 14,     12, 14, 15,   // bottom
                        16, 17, 18,     16, 18, 19,   // right
                        20, 21, 22,     20, 22, 23   // left
                    ],
                    uv : [
                        1, 0,
                        0, 0,
                        0, 1,
                        1, 1,

                        1, 0,
                        0, 0,
                        0, 1,
                        1, 1,

                        1, 0,
                        0, 0,
                        0, 1,
                        1, 1,

                        1, 0,
                        0, 0,
                        0, 1,
                        1, 1,

                        1, 0,
                        0, 0,
                        0, 1,
                        1, 1,

                        1, 0,
                        0, 0,
                        0, 1,
                        1, 1
                    ],
                    color : [
                        //FRONT
                        0, 1, 1,
                        1, 0, 1,
                        1, 1, 0,
                        0, 0, 1,
                        //BACK
                        0, 1, 1,
                        1, 0, 1,
                        1, 1, 0,
                        0, 0, 1,
                        //TOP
                        0, 1, 1,
                        1, 0, 1,
                        1, 1, 0,
                        0, 0, 1,
                        //BOTTOM
                        0, 1, 1,
                        1, 0, 1,
                        1, 1, 0,
                        0, 0, 1,
                        //RIGHT
                        0, 1, 1,
                        1, 0, 1,
                        1, 1, 0,
                        0, 0, 1,
                        //LEFT
                        0, 1, 1,
                        1, 0, 1,
                        1, 1, 0,
                        0, 0, 1
                    ]
                }
            }

        };
        return GLHelpers;
    });