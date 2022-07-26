import Joi from "joi";

const Schemes = {
    POST:{
        "/test": Joi.object({
            content: Joi.any().required(),
            from: Joi.string().optional(),
            to: Joi.string().required(),
            templateId: Joi.number().optional(),
            businessId: Joi.alternatives().try(Joi.string(), Joi.number()),
        })
    },

    GET:{
        
    },

    DELETE:{
        
    }
}

export default Schemes;