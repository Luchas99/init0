$(document).ready(function() {
    $('#europe-map').vectorMap({
        map: 'europe_mill',
        backgroundColor: 'rgba(0,0,0,0)',
        regionsSelectable: true,
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#9b59b6'
            },
            selected: {
                fill: '#8e44ad'
            }
        }
    })

    $('#usa-map').vectorMap({
        map: 'us_mill',
        backgroundColor: 'rgba(0,0,0,0)',
        regionsSelectable: true,
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#1abc9c'
            },
            selected: {
                fill: '#16a085'
            }
        }
    })

    $('#france-map').vectorMap({
        map: 'fr_regions_2016_mill',
        backgroundColor: 'rgba(0,0,0,0)',
        regionsSelectable: true,
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#3498db'
            },
            selected: {
                fill: '#2980b9'
            }
        }
    })

    $('#canada-map').vectorMap({
        map: 'ca_mill',
        backgroundColor: 'rgba(0,0,0,0)',
        regionsSelectable: true,
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#2ecc71'
            },
            selected: {
                fill: '#27ae60'
            }
        }
    })

    $('#asia-map').vectorMap({
        map: 'asia_mill',
        backgroundColor: 'rgba(0,0,0,0)',
        regionsSelectable: true,
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#e74c3c'
            },
            selected: {
                fill: '#c0392b'
            }
        }
    })

    $('#australia-map').vectorMap({
        map: 'au_mill',
        backgroundColor: 'rgba(0,0,0,0)',
        regionsSelectable: true,
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#f1c40f'
            },
            selected: {
                fill: '#f39c12'
            }
        }
    })

    var dataSale = {
        "AU": 12190,
        "AR": 3510,
        "BR": 2023,
        "CA": 1563,
        "CN": 5745,
        "FR": 2555,
        "DE": 3305,
        "JP": 5390,
        "RU": 2476,
        "US": 14624
    };
    var dataMapMarker = [{
        latLng: [41.90, 12.45],
        name: 'Vatican City',
        earnings: '500'
    }, {
        latLng: [43.73, 7.41],
        name: 'Monaco',
        earnings: '32'
    }, {
        latLng: [-0.52, 166.93],
        name: 'Nauru',
        earnings: '432'
    }, {
        latLng: [-8.51, 179.21],
        name: 'Tuvalu',
        earnings: '321'
    }, {
        latLng: [43.93, 12.46],
        name: 'San Marino',
        earnings: '510'
    }, {
        latLng: [47.14, 9.52],
        name: 'Liechtenstein',
        earnings: '130'
    }, {
        latLng: [7.11, 171.06],
        name: 'Marshall Islands',
        earnings: '234'
    }, {
        latLng: [17.3, -62.73],
        name: 'Saint Kitts and Nevis',
        earnings: '329'
    }, {
        latLng: [3.2, 73.22],
        name: 'Maldives',
        earnings: '120'
    }, {
        latLng: [35.88, 14.5],
        name: 'Malta',
        earnings: '435'
    }, {
        latLng: [12.05, -61.75],
        name: 'Grenada',
        earnings: '321'
    }, {
        latLng: [13.16, -61.23],
        name: 'Saint Vincent and the Grenadines',
        earnings: '110'
    }, {
        latLng: [13.16, -59.55],
        name: 'Barbados',
        earnings: '90'
    }, {
        latLng: [17.11, -61.85],
        name: 'Antigua and Barbuda',
        earnings: '230'
    }, {
        latLng: [-4.61, 55.45],
        name: 'Seychelles',
        earnings: '200'
    }, {
        latLng: [7.35, 134.46],
        name: 'Palau',
        earnings: '320'
    }, {
        latLng: [42.5, 1.51],
        name: 'Andorra',
        earnings: '123'
    }, {
        latLng: [14.01, -60.98],
        name: 'Saint Lucia',
        earnings: '500'
    }, {
        latLng: [6.91, 158.18],
        name: 'Federated States of Micronesia',
        earnings: '310'
    }, {
        latLng: [1.3, 103.8],
        name: 'Singapore',
        earnings: '23'
    }, {
        latLng: [1.46, 173.03],
        name: 'Kiribati',
        earnings: '58'
    }, {
        latLng: [-21.13, -175.2],
        name: 'Tonga',
        earnings: '90'
    }, {
        latLng: [15.3, -61.38],
        name: 'Dominica',
        earnings: '239'
    }, {
        latLng: [-20.2, 57.5],
        name: 'Mauritius',
        earnings: '100'
    }, {
        latLng: [26.02, 50.55],
        name: 'Bahrain',
        earnings: '225'
    }, {
        latLng: [0.33, 6.73],
        name: 'São Tomé and Príncipe',
        earnings: '150'
    }];
    $('#world-map').vectorMap({
        map: 'world_mill',
        backgroundColor: 'rgba(0,0,0,0)',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#34495e',
            },
        },
        markers: dataMapMarker,
        markerStyle: {
            initial: {
                fill: '#e74c3c',
                stroke: '#e74c3c',
                "fill-opacity": 1,
                "stroke-width": 10,
                "stroke-opacity": .2,
                r: 5
            },
            hover: {
                stroke: '#34495e',
                "stroke-width": 2,
                cursor: 'pointer'
            },
        },
        onRegionTipShow: function(e, el, code) {
            if (dataSale.hasOwnProperty(code)) {
                el.html(el.html() + ' ($' + dataSale[code] + ')');
            }
        },
        onMarkerTipShow: function(e, el, code) {
            el.html(el.html() + ' ($' + dataMapMarker[code].earnings + ')');
        }
    })

})