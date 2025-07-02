

const getHomePage = (req, res) => {
    // process data
    // call model

    res.send('Hello World! Nodemon');
}

const getABC = (req, res) => {
    res.send('Check abc');
}

const getTruong = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage, getABC, getTruong
}