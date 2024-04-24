let data = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const buttons = document.querySelectorAll('.btn-option');

const clickedButton = (button) => {
  buttons.forEach((b) => b.classList.remove('active'));
  button.classList.add('active');
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    clickedButton(button);
    const clickedOption = button.dataset.option;
    renderCards(clickedOption);
  });
});

const clearCards = () => {
  const cards = document.querySelectorAll('.activity-card');
  cards.forEach((card) => {
    card.remove();
  });
};

const renderCards = (clickedOption) => {
  clearCards();
  const container = document.querySelector('div.container');

  const calcTimeframe = (option) => {
    if (option === 'daily') {
      return 'Yesterday';
    } else if (option === 'weekly') {
      return 'Last Week';
    } else if (option === 'monthly') {
      return 'Last Month';
    }
  };

  data.forEach((option) => {
    const name = option.title;
    const optionClass = name.toLowerCase().replace(' ', '-');
    const selectedTimeframe = option.timeframes[clickedOption];
    const previousTimeframe = calcTimeframe(clickedOption);
    const section = document.createElement('section');
    section.classList.add('activity-card', optionClass);
    const addCard = `
    <div class="activity-bg">
        <img src="images/icon-${optionClass}.svg" alt="">
      </div>
      <div class="activity-info">
        <header class="activity-header">
          <h2 class="activity-name">
            ${name}
          </h2>
          <button class="btn activity-options">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF" fill-rule="evenodd" />
            </svg>
          </button>
        </header>
        <div class="activity-timeframe">
          <h3>${selectedTimeframe.current}hrs</h3>
          <div class="activity-previous">
            <p class="time-window">${previousTimeframe}</p>
            <p> - </p>
            <p class="time">${selectedTimeframe.previous}hrs</p>
          </div>
        </div>
      </div>
    `;

    section.innerHTML = addCard;
    container.append(section);
  });
};

buttons[1].click();
