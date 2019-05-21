
export const setStorage = (key,data) => {
    uni.setStorage({
        key: key,
        data: data,
        success: function () {
            
        }
    });
};
