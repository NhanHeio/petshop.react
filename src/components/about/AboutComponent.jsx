import React from 'react'

const AboutComponent = () => {
    return (
        <div className="bg-gray-50">
            <div className="flex flex-col justify-around w-3/5 h-screen mt-20 mx-auto">
                <div>
                    <h1 className="text-4xl text-gray-600 font-bold my-6">PetShop là:</h1>
                    <p className="text-2xl text-gray-400 font-semibold my-6">PetShop được xây dựng dựa trên tiêu chí là cổng thông tin khổng lồ và hoàn toàn miễn phí về các vấn đề xung quanh động vật,
                        đặc biệt là thú cưng, cụ thể như các bệnh về chó mèo,
                        các thực phẩm dinh dưỡng dành cho thú cưng, cách chăm sóc và điều trị bệnh cho chó mèo…
                        Tất cả những thông tin tại Monspet được sưu tầm và tham khảo từ nhiều nguồn khác nhau có chọn lọc,
                        bên cạnh đó còn là trải nghiệm thực tế của chúng tôi trong quá trình nuôi thú cưng để đem đến cho độc
                        giả những thông tin chính xác và hữu ích nhất.</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/2 mx-3">
                        <h1 className="text-2xl text-gray-500 font-bold my-6">Sứ mệnh</h1>
                        <span className="text-xl text-gray-400 font-semibold my-6">Sứ mệnh của chúng tôi là mang đến cho thú cưng của khách hàng trải nghiệm tốt nhất.
                            Giúp thú cưng của khách hàng được tận hưởng những dịch vụ hàng đầu, cùng với đội ngũ nhân viên chuyên nghiệp
                            giúp đảm quá trình chăm sóc thú cưng tại cửa hàng là trải nghiệm tuyệt vời cho thú cưng của khách hàng.
                        </span>
                        <br />
                        <span className="text-xl text-gray-400 font-semibold my-6">Ngoài ra cửa hàng còn cung cấp các sản phẩm phục vụ việc chăm sóc thú cưng với chất lượng tốt nhất.
                            Cửa hàng cam kết cung cấp các sản phẩm chất lượng hàng đầu, 
                            nguồn gốc xuất xứ rõ ràng, giá cả vô cùng hợp lý.
                        </span>
                    </div>
                    <div className="w-1/2 mx-3">
                        <h1 className="text-2xl text-gray-500 font-bold my-6">Tầm nhìn</h1>
                        <span className="text-xl text-gray-400 font-semibold my-6">Chúng tôi mong muốn PetShop sẽ trở thành địa chỉ chăm sóc thú cưng đáng tin cậy
                             cho những người quan tâm và yêu thương động vật.
                             Và quan trọng hơn PetShop sẽ là người bạn đồng hành thân cận với mọi người trong quá trình chăm sóc thú cưng.
                        </span>
                        <br />
                        <span className="text-xl text-gray-400 font-semibold my-6">Chúng tôi sẽ không ngừng nỗ lực và phát triển, phủ rộng thông tin đến tất cả mọi người, đến những nơi có những con người yêu thương động vật.</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutComponent