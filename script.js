function uploadPDF(){
                const fileInput = document.getElementById("pdfInput");
                
                const status = document.getElementById("status");

                const file = fileInput.files[0];

                if(!file){
                                status.textContent = "Lütfen bir dosya seçin!";
                                return;
                }

                if(file.type !== "application/pdf")
                {
                                status.textContent = "Eklediğiniz dosya PDF türünde olmalı!";
                                return;
                }


                status.textContent = file.name + " Dosya Başarıyla Seçildi!";
}