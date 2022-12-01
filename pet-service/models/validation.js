import { Model } from "sequelize";

class ValidatableModel extends Model{
    static errorResponse(message) {
        return {success: true, message};
    }

    static successResponse = {error : false, message : ""}

}

export default ValidatableModel;