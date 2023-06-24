module.exports = {
    chattings: async (req, res) => {
        const message = req.body.message
        
        try {
            if(message === 'halo') {
                res.json({
                    reply: 'Halo Juga! ada yang mau saya bantu?',
                    userMessage: message
                })
            } else{
                res.json({
                    reply: 'Maaf Django tidak mengerti Pesan Anda',
                    userMessage: message
                })
            }
        } catch (error) {
            
        }
    }
}