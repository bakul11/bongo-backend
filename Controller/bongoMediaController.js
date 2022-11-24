const bongoMediaDB = require("../Model/bongoMediaModel");

//Post Movies
exports.postMedia = async (req, res, next) => {
    try {
        const {
            title,
            des,
            duration,
            category,
            thubnail,
            videoID,
            heroName,
            heroPhoto,
            recent,
            heroinName,
            heroinPhoto,
            directorName,
            directorPhoto } = req.body;

        const movie = await bongoMediaDB.create({
            title,
            des,
            duration,
            category,
            thubnail,
            videoID,
            heroName,
            heroPhoto,
            heroinName,
            recent,
            heroinPhoto,
            directorName,
            directorPhoto
        })

        //success 
        res.status(201).json({
            success: true,
            message: "Upload sucessfully Done!",
            movie
        })

    } catch (error) {
        res.status(401).json({
            message: 'Uploading fail Please try aggain!',
            error: error.message
        })
    }
}


//Get Jazz Movie
exports.getJazzMovie = async (req, res, next) => {
    try {
        const jazz = await bongoMediaDB.find({ category: 'jazz' });
        //success 
        res.status(200).json({
            success: true,
            message: "jazz movies sucessfully Done!",
            jazz
        })

    } catch (error) {
        res.status(404).json({
            message: 'Jazz Movie Not Found!',
            error: error.message
        })
    }
}
//Get Dabbing Movie
exports.getDabbingMedia = async (req, res, next) => {
    try {
        const dabbing = await bongoMediaDB.find({ category: 'dabbing' });
        //success 
        res.status(200).json({
            success: true,
            message: "dabbing movies sucessfully Done!",
            dabbing
        })

    } catch (error) {
        res.status(404).json({
            message: 'Jazz Movie Not Found!',
            error: error.message
        })
    }
}

//Get Bangla Natok
exports.banglaNatok = async (req, res, next) => {
    try {
        const banglaNatok = await bongoMediaDB.find({ category: 'banglaNatok' });
        //success 
        res.status(200).json({
            success: true,
            message: "bangla Natok sucessfully Done!",
            banglaNatok
        })

    } catch (error) {
        res.status(404).json({
            message: 'banglaNatok Not Found!',
            error: error.message
        })
    }
}



//Get Popular Movie
exports.getPopularMedia = async (req, res, next) => {
    try {
        const popular = await bongoMediaDB.find({ recent: 'popular' });
        //success 
        res.status(200).json({
            success: true,
            message: "polular movies sucessfully Done!",
            popular
        })

    } catch (error) {
        res.status(404).json({
            message: 'popular Movie Not Found!',
            error: error.message
        })
    }
}


//Get Single Media ID
exports.getSingleMedia = async (req, res, next) => {
    try {
        const { mediaID } = req.params;
        const movieId = await bongoMediaDB.findById(mediaID);
        //success 
        res.status(200).json({
            success: true,
            message: "Single ID sucessfully Done!",
            movieId
        })

    } catch (error) {
        res.status(404).json({
            message: 'ID Not Found!',
            error: error.message
        })
    }
}

//Delete all Movie
exports.delAllMovie = async (req, res, next) => {
    try {
        const delMovie = await bongoMediaDB.deleteMany();
        //success 
        res.status(200).json({
            success: true,
            message: "delete all movie sucessfully Done!",
            delMovie
        })

    } catch (error) {
        res.status(404).json({
            message: 'delete fail please try aggain!',
            error: error.message
        })
    }
}










