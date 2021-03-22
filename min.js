axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAHtvxeealzqZB48dcpIAzqZCUlHkqchL4TmtZAFsyvZA3LF9O2ZBjDeitwiCnCOaZCEE30IZAxRL707127H3GffxDjcoqP0PxjfQhnwiiRklqVCQopcgKAGwtbG6mSLAX5Qr9ZCNujMiF2ZC5QOD1GNT7jQ9ruRoriQZDZD')
        .then(response => {
            var output = "";
            output += " <span class='highlight'>Thông tin bài viết số 1</span> </br> Content: " +
            response.data.data[0].message + "<br>" +
            "<span class='highlight'>Thông tin bài viết số 2</span> </br> Content: " +
            response.data.data[1].message + "<br>" +
            "<span class='highlight'>Thông tin bài viết số 3</span> </br> Content: " +
            response.data.data[2].message;

            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.error(error));