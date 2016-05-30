(function (data) {
    data.caregiver = {
            name: "Shayak Dutta",
            phone: "6479905555"
    };

    data.patient = {
        name: "Oscar Fraxedas",
        phone: "6479715555",
        location: "123 Sesame St, Toronto, ON M1W, Canada",
        notes: "Type 1 diabetes, allergic to tylenol and very grouchy"
    };

    data.details = function (id) {
        return database[id];
    };

    data.roomId = "Y2lzY29zcGFyazovL3VzL1JPT00vZTQ4ODFmYjAtMTlkYS0xMWU2LWJmNGMtYzc2MWViNjMyMTg2";
    data.sparkToken = "NDEyZmJlOWQtZWI1MS00YzUwLWI5ZmQtYjRhMmRkZDYxNzliNjAwOGVkMjUtYzc0";
    data.tropoSmsToken = "535956446c636c744d6e57477743464962615862716d656f6e6c714e736f43525545666b6c6542564f6d684b";
    data.tropoCallToken = "4e6e755a736a454168434e6553427967464f6e687174544659685574434e767250704976507363777a695568";
    data.tropoUrl = "https://api.tropo.com/1.0/sessions";
    data.zeusUrl = "http://api.site1.ciscozeus.io:80/logs/c28e60d1/health/";
})(module.exports);