let isImageVisible = false;
        const images = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdFpxlVU2FblHxYMT820_wI1MwTHbKUSbvA&s',
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBwcHBwcHBwcHBw0IBwcHBw8ICQcNFxIWIiARFhMYKCgsGBolJx8fLT0tJS4uLi86FyIzRD84PjQuOisBCgoKDQ0NDg0PDisZFRkrKy0tNysrKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwcEBQYBAv/EAC8QAQACAQMCBAQFBQEAAAAAAAABAgMEBRESIQYxUWETQXGBFCIyUpEHNHSxwSP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ApoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZe36fHrcsaSb1w5svbS5rTxSb/ALLe0+vy90GpwZtLmy6bUYr4c+C8482K8cWpaPkCMAAAAAAAAAAAAAAAAAAAAAEumtamfDes9Nq5ImLek8u58Y7bO6bFpvEePHEazb4ppdy6J5+NgmeK39+me3PpPs4jR4py5qVjmePzTx58Lq8KbZXW7ZrNu1ETGLW6TJpMlYjtEWpMR/AKOHs1tSZpftekzS8elo83gAAAAAAAAAAAAAAAAAAAJMOK2a8UrEzPnPTHPYGx8O4Zz6/Bjjt15Ij15+3zXh4OmMGpppbTF/hWmOuJ5jtx3VV4a0ldPqceXp+JNL0tWeO0d4n7rR3XPp/Dvh3ed6p+XPGjnHpL2nzz5O1axH1nkFC661b6zWXp+i+szXpx84m8oCI4iI9I4AAAAAAAAAAAAAAAAAB9Y6TknprNer5Ra8U5+8tlp/D+65piPwmWtZjnq6euOPXsDWVrNp6axzPpDpNg2bLfUVy9E2rW0TEczbjv5TxHeG52Hwdl5pOamSbeeS0Y+em3P6fp5+ft9FhYp8OeGdH8bddXp9La02y3/EW/9s1pnvFccd5+0Ax/C3hnDXLznrk6prFqR0xTvPs4T+q3inBu2tw7LtmSt9q2jJM5M2OY+HrtTxxNo9a17xHrzb2TeNf6l6jdcWXbNhpm27bssTTVay/5dZr6/tjj9FJ/mfbyV55eQAAAAAAAAAAAAAAAAAACbTavV6T+11Wq0v8Ajai+H/UoQGwvvm9ZK9F933O1Ijjp/HZI/wCsC0ze1r3ta97fqve02vb6zLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k='
        ];
        let currentImageIndex = 0;

        document.getElementById('changeTextBtn').addEventListener('click', changeText);
        document.getElementById('increaseFontSizeBtn').addEventListener('click', increaseFontSize);
        document.getElementById('decreaseFontSizeBtn').addEventListener('click', decreaseFontSize);
        document.getElementById('changeTextColorBtn').addEventListener('click', changeTextColor);
        document.getElementById('changeBackgroundColorBtn').addEventListener('click', changeBackgroundColor);
        document.getElementById('toggleImageBtn').addEventListener('click', toggleImage);

        function changeText() {
            const textElement = document.getElementById('text');
            textElement.innerText = '  Hello Girls !';
        }

        function increaseFontSize() {
            const textElement = document.getElementById('text');
            let currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
            textElement.style.fontSize = (currentSize + 2) + 'px';
        }

        function decreaseFontSize() {
            const textElement = document.getElementById('text');
            let currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
            textElement.style.fontSize = (currentSize - 2) + 'px';
        }

        function changeTextColor() {
            const textElement = document.getElementById('text');
            textElement.style.color = textElement.style.color === 'blue' ? 'black' : 'blue';
        }

        function changeBackgroundColor() {
            const textElement = document.getElementById('text');
            textElement.style.backgroundColor = textElement.style.backgroundColor === 'purple ' ? 'transparent' : 'purple';
        }

        function toggleImage() {
            const imageElement = document.getElementById('image');
            if (isImageVisible) {
                imageElement.style.display = 'none';
            } else {
                imageElement.src = images[currentImageIndex];
                imageElement.style.display = 'block';
                currentImageIndex = (currentImageIndex + 1) % images.length;
            }
            isImageVisible = !isImageVisible;
        }