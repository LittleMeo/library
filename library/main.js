const data = [
    {
        season: 'winter',
        tag: 'Staff Picks',
        title: 'The book eaters',
        author: 'By Sunyi Dean',
        text: 'An Unusual Sci-Fi Story About A Book Eater Woman Who Tries Desperately To Save Her Dangerous Mind-Eater Son From Tradition And Certain Death. Complete With Dysfunctional Family Values, Light Sapphic Romance, And A Strong, Complex Protagonist. Not For The Faint Of Heart.',
        img: 'img/book.png',
    },
    {
        season: 'winter',
        tag: 'Staff Picks',
        title: 'Cackle',
        author: 'By Rachel Harrison',
        text: 'Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.',
        img: 'img/book1.png',
    },
    {
        season: 'winter',
        tag: 'Staff Picks',
        title: 'Dante: Poet of the Secular World',
        author: 'By Erich Auerbach',
        text: "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.",
        img: 'img/book2.png',
    },
    {
        season: 'winter',
        tag: 'Staff Picks',
        title: 'The Last Queen',
        author: 'By Clive Irving',
        text: 'A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.',
        img: 'img/book3.png',
    },
    {
        season: 'spring',
        tag: 'Staff Picks',
        title: 'The Body',
        author: 'By Stephen King',
        text: 'Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.',
        img: 'img/book4.png',
    },
    {
        season: 'spring',
        tag: 'Staff Picks',
        title: 'Carry: A Memoir of Survival on Stolen Land',
        author: 'By Toni Jenson',
        text: "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.",
        img: 'img/book5.png',
    },
    {
        season: 'spring',
        tag: 'Staff Picks',
        title: 'Days of Distraction',
        author: 'By Alexandra Chang',
        text: 'A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.',
        img: 'img/book6.png',
    },
    {
        season: 'spring',
        tag: 'Staff Picks',
        title: 'Dominicana',
        author: 'By Angie Cruz',
        text: 'A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.',
        img: 'img/book7.png',
    },
    {
        season: 'summer',
        tag: 'Staff Picks',
        title: 'Crude: A Memoir',
        author: 'By Pablo Fajardo & ​​Sophie Tardy-Joubert',
        text: 'Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people',
        img: 'img/book8.png',
    },
    {
        season: 'summer',
        tag: 'Staff Picks',
        title: 'Let My People Go Surfing',
        author: 'By Yvon Chouinard',
        text: 'Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.',
        img: 'img/book9.png',
    },
    {
        season: 'summer',
        tag: 'Staff Picks',
        title: 'The Octopus Museum: Poems',
        author: 'By Brenda Shaughnessy',
        text: 'This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.',
        img: 'img/book10.png',
    },
    {
        season: 'summer',
        tag: 'Staff Picks',
        title: 'Shark Dialogues: A Novel',
        author: 'By Kiana Davenport',
        text: 'An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.',
        img: 'img/book11.png',
    },
    {
        season: 'autumn',
        tag: 'Staff Picks',
        title: 'Casual Conversation',
        author: 'By Renia White',
        text: "White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity.",
        img: 'img/book12.png',
    },
    {
        season: 'autumn',
        tag: 'Staff Picks',
        title: 'The Great Fire',
        author: 'By Lou Ureneck',
        text: 'The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide',
        img: 'img/book13.png',
    },
    {
        season: 'autumn',
        tag: 'Staff Picks',
        title: 'Rickey: The Life and Legend',
        author: 'By Howard Bryant',
        text: "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?",
        img: 'img/book14.png',
    },
    {
        season: 'autumn',
        tag: 'Staff Picks',
        title: 'Slug: And Other Stories',
        author: 'By Megan Milks',
        text: 'Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.',
        img: 'img/book15.png',
    },
];

function favoriteBlockUpdate(props) {
    const { data, season = 'winter' } = props;
    const favoriteItems = document.querySelector('.favorites__items');
    const result = data.filter((data) => data.season === season.toLowerCase());

    favoriteItems.innerHTML = '';
    result.forEach((element) => {

        const book = document.createElement('div');
        book.className = 'book';

        const bookTag = document.createElement('div');
        bookTag.className = 'book__tag';
        bookTag.textContent = element.tag;

        const bookTitle = document.createElement('div');
        bookTitle.className = 'book__title'
        bookTitle.textContent = element.title

        const bookAuthor = document.createElement('div');
        bookAuthor.className = 'book__author'
        bookAuthor.textContent = element.author

        const bookText = document.createElement('div');
        bookText.className = 'book__text'
        bookText.textContent = element.text

        const bookButton = document.createElement('button');
        bookButton.className = 'book__button button'
        bookButton.textContent = 'Buy'

        const bookImg = document.createElement('div');
        bookImg.className = 'book__img'
        bookImg.innerHTML = `<img src="${element.img}">`

        book.append(bookTag, bookTitle, bookAuthor, bookText, bookButton, bookImg);

        favoriteItems.append(book);
    })

}

window.onload = function () { // можно также использовать window.addEventListener('load', (event) => {

    const burger = document.querySelector('.button-burger');
    const burgerOverlay = document.querySelector('.burger__overlay')
    const navLinks = document.querySelectorAll('.nav__link')
    const header = document.querySelector('.header');
    const slider = document.querySelector('.slider');
    const swipe__left = document.querySelector('.swipe__left')
    const swipe__right = document.querySelector('.swipe__right')
    const slider__buttons = document.querySelectorAll('.slider__button-area')
    const favoritesItems = document.querySelector('.favorites__items')

    const contactChoiceClick = () => {
        const contactChoices = document.querySelectorAll('.contactChoice');
        contactChoices.forEach((currentElement, index, array) => {
            currentElement.addEventListener('click', (clickEvent) => {
                if (clickEvent.target.value !== undefined) {
                    console.log(favoritesItems.classList.contains('choice--hidden'));
                    favoritesItems.classList.add('choice--hidden');
                    setTimeout(() => {
                        favoriteBlockUpdate({ data: data, season: clickEvent.target.value });
                        favoritesItems.classList.remove('choice--hidden');
                    }, 650);
                } else {
                }
            });
        });
    };

    const navLinkCallback = (element) => {
        element.addEventListener('click', () => {
            header.classList.remove('nav--visible');
        });
    };

    navLinks?.forEach(navLinkCallback);
    burger?.addEventListener('click', () => {
        header.classList.toggle('nav--visible');
    });

    burgerOverlay?.addEventListener('click', () => {
        header.classList.toggle('nav--visible');
    });

    slider.dataset.activeSlideNumber = 1;
    swipe__left?.addEventListener('click', () => {
        dataDown(slider)
    });
    swipe__right?.addEventListener('click', () => {
        dataUp(slider)
    });
    slider__buttons.forEach((element) => {
        element.addEventListener('click', () => {
            dataSet(slider, element.dataset.number)
        })
    })

    function dataUp(slider) {
        if (slider.dataset.activeSlideNumber < 5) {
            slider.dataset.activeSlideNumber = ++slider.dataset.activeSlideNumber;

        }
    }

    function dataDown(slider) {
        if (slider.dataset.activeSlideNumber > 1) {
            slider.dataset.activeSlideNumber = --slider.dataset.activeSlideNumber;

        }
    }

    function dataSet(slider, number) {
        slider.dataset.activeSlideNumber = number;
    }


    favoriteBlockUpdate({ data, season: 'winter' });
    contactChoiceClick();

}