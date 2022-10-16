var APP_DATA = {
  "scenes": [
    {
      "id": "0-portail",
      "name": "Portail",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.035573919999995596,
        "pitch": 0,
        "fov": 1.3853808542956956
      },
      "linkHotspots": [
        {
          "yaw": 0.035573919999995596,
          "pitch": 0,
          "rotation": 0,
          "target": "1-entre-campus"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entre-campus",
      "name": "Entrée Campus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.00006460999999902128,
        "pitch": 0,
        "fov": 1.3853808542956956
      },
      "linkHotspots": [
        {
          "yaw": 0.153796515867759,
          "pitch": -0.05778375019200155,
          "rotation": 0.7853981633974483,
          "target": "5-tribune"
        },
        {
          "yaw": 0.3889642173729353,
          "pitch": 0.03185231243860187,
          "rotation": 0.7853981633974483,
          "target": "2-iai"
        },
        {
          "yaw": 0.18723676800689937,
          "pitch": 0.1675786006677562,
          "rotation": 3.141592653589793,
          "target": "0-portail"
        },
        {
          "yaw": -0.11308333750237587,
          "pitch": 0.05127633742197801,
          "rotation": 0,
          "target": "6-stade"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-iai",
      "name": "IAI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.00022485000000038724,
        "pitch": 0,
        "fov": 1.3853808542956956
      },
      "linkHotspots": [
        {
          "yaw": 0.005635670000009085,
          "pitch": 0,
          "rotation": 0,
          "target": "3-campus"
        },
        {
          "yaw": 0.29471287801376533,
          "pitch": 0.08882011270535983,
          "rotation": 2.356194490192345,
          "target": "1-entre-campus"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-campus",
      "name": "Campus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 1.2962330499998558,
        "pitch": 0,
        "fov": 1.3853808542956956
      },
      "linkHotspots": [
        {
          "yaw": 1.2962330499998558,
          "pitch": 0,
          "rotation": 0,
          "target": "4-classe"
        },
        {
          "yaw": 1.4804980884078018,
          "pitch": 0.16542815640732123,
          "rotation": 3.141592653589793,
          "target": "2-iai"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-classe",
      "name": "Classe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.08658357000000017,
        "pitch": 0,
        "fov": 1.3853808542956956
      },
      "linkHotspots": [
        {
          "yaw": 0.08658357000000017,
          "pitch": 0,
          "rotation": 1.5707963267948966,
          "target": "3-campus"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-tribune",
      "name": "Tribune",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.37571813490454176,
        "pitch": 0.00018301482527860458,
        "fov": 1.3853808542956956
      },
      "linkHotspots": [
        {
          "yaw": -3.092630859303009,
          "pitch": 0,
          "rotation": 0,
          "target": "6-stade"
        },
        {
          "yaw": 0.2226391372144665,
          "pitch": 0.30485836554689705,
          "rotation": 3.9269908169872414,
          "target": "6-stade"
        },
        {
          "yaw": 0.40488553280559714,
          "pitch": 0.18455710772634148,
          "rotation": 7.853981633974483,
          "target": "2-iai"
        },
        {
          "yaw": 0.5312820024664813,
          "pitch": 0.34118731039549743,
          "rotation": 1.5707963267948966,
          "target": "1-entre-campus"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-stade",
      "name": "stade",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -2.539696785206214,
        "pitch": 0.03997410792560885,
        "fov": 1.3853808542956956
      },
      "linkHotspots": [
        {
          "yaw": -2.5224369618873617,
          "pitch": 0.11554224481207598,
          "rotation": 0,
          "target": "5-tribune"
        },
        {
          "yaw": -2.0582760271961877,
          "pitch": 0.10980265408833922,
          "rotation": 0,
          "target": "1-entre-campus"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
