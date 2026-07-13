const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

                faq.querySelector(".icon").textContent = "+";

            }

        });

        item.classList.toggle("active");

        const icon = item.querySelector(".icon");

        icon.textContent = item.classList.contains("active") ? "−" : "+";

    });

});