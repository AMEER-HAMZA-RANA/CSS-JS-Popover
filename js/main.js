// JavaScript here!

const popoverTriggers = document.querySelectorAll('.popover-trigger');

const generateUniqueString = length => {
  return Math.random().toString(36).substring(2, 2 + length)
}

const createPopover = trigger => {
  const popover = document.createElement('div');
  const id = generateUniqueString(5);
  popover.id = id;
  trigger.dataset.target = id;
  popover.classList.add('popover');
  popover.dataset.position = trigger.dataset.popoverPosition;
  const p = document.createElement('p');
  p.textContent = trigger.dataset.content;
  popover.appendChild(p);
  document.body.appendChild(popover)
}
const bottomTrigger = document.querySelector('.popover-trigger[data-popover-position="bottom"]');
const popover = createPopover(bottomTrigger);

const calculatePopoverPosition = (trigger,popover) => {
  const triggerRect = trigger.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const space = 20;
  const {position} = popover.dataset;
  if(position === 'top') {
    return {
      top: triggerRect.top - popoverRect.height - space,
      left: (triggerRect.left + triggerRect.width / 2) - popoverRect.width / 2
    }
  }
  if(position === 'left') {
    return {
      top: (triggerRect.top + triggerRect.height / 2) - popoverRect.height / 2,
      left: triggerRect.left - popoverRect.width - space
    }
  }
  if(position === 'right') {
    return {
      top: (triggerRect.top + triggerRect.height / 2) - popoverRect.height / 2,
      left: triggerRect.right + space
    }
  }
  if (position === 'bottom') {
    return {
      top: triggerRect.bottom + space,
      left: (triggerRect.left + triggerRect.width / 2) - popoverRect.width / 2
    }
  }
}

const getPopover = trigger => {
  return document.querySelector(`#${trigger.dataset.target}`);
}

popoverTriggers.forEach(trigger => {
  const popover = getPopover(trigger) || createPopover(trigger);
  const popoverPosition = calculatePopoverPosition(trigger,popover);
  popover.style.top = `${popoverPosition.top}px`;
  popover.style.left = `${popoverPosition.left}px`;
  popover.setAttribute('hidden',true);
})

document.addEventListener('click',(e) => {
  const trigger = e.target.closest('.popover-trigger');
  if(!trigger) return 
  const popover = document.querySelector(`#${trigger.dataset.target}`);
  if(popover.hasAttribute('hidden')) {
    popover.removeAttribute('hidden');
  } else {
    popover.setAttribute('hidden',true);
  }
})

document.addEventListener('click', event => {
  if (!event.target.closest('.popover') && !event.target.closest('.popover-trigger')) {
    const popovers = [...document.querySelectorAll('.popover')] ////////////////////////////////////
    popovers.forEach(popover => popover.setAttribute('hidden', true))
  }
})




////////////  ^^^^^^^^^^^^^^^^^   *OLD CODE*    ^^^^^^^^^^^^^^^^^^^^^^^     /////////////////

//     if (!e.target.closest('.popover') && !e.target.closest('.popover-trigger')) {
//       const popovers = [...document.querySelectorAll('.popover')]
//       popovers.forEach(popover => popover.setAttribute('hidden', true))
//     }
// })

// document.addEventListener('click', (e) => {
//     if(!e.target.closest('.popover') && !e.target.closest('.popover-trigger')) {
//     const popovers = [document.querySelectorAll('.popover')];
//     popovers.forEach(popover => {
//       popover.setAttribute('hidden',true);
//     })
//     }
//   })


// Top Popover
// {
// const trigger = document.querySelectorAll('.popover-trigger')[0];
// const popover = document.querySelectorAll('.popover')[0];

// const triggerRect = trigger.getBoundingClientRect();
// const popoverRect = popover.getBoundingClientRect();
// const triggerCenter = triggerRect.left + triggerRect.width / 2;
// const popoverLeft = triggerCenter - popoverRect.width / 2; 

// popover.style.left = `${popoverLeft}px`;

// const triggerTop = triggerRect.top;
// const space = 20;
// const popoverHeight = popoverRect.height;

// const popoverTop = triggerTop - popoverHeight - space;
// popover.style.top = `${popoverTop}px`;

// // hide popover
// popover.setAttribute('hidden', true);

// //show popover on click
// trigger.addEventListener('click', () => {
//     if(popover.hasAttribute('hidden')) {
//         popover.removeAttribute('hidden');
//     } else {
//         popover.setAttribute('hidden', true);
//     }
// });

// // hide popover on click outside of popover
// document.addEventListener('click', (e) => {
//   if(e.target.closest('.popover') || e.target.closest('.popover-trigger')) return
//   popover.setAttribute('hidden', true);
// });
// }

// // Left Popover
// {
//   const trigger = document.querySelectorAll('.popover-trigger')[1];
//   const popover = document.querySelectorAll('.popover')[1];

//   const triggerRect = trigger.getBoundingClientRect();
//   const popoverRect = popover.getBoundingClientRect();
//   const triggerCenter = triggerRect.top + triggerRect.height / 2;
//   const popoverTop = triggerCenter - popoverRect.height / 2;

//   popover.style.top = `${popoverTop}px`;

//   const triggerLeft = triggerRect.left;
//   const space = 20;
//   const popoverWidth = popoverRect.width;

//   const popoverLeft = triggerLeft - popoverWidth - space;
//   popover.style.left = `${popoverLeft}px`;

//   // hide popover
//   popover.setAttribute('hidden', true);

//   //show popover on click
// trigger.addEventListener('click', () => {
//     if(popover.hasAttribute('hidden')) {
//         popover.removeAttribute('hidden');
//     } else {
//         popover.setAttribute('hidden', true);
//     }
// })

// // hide popover on click outside of popover
// document.addEventListener('click', (e) => {
//   if(e.target.closest('.popover') || e.target.closest('.popover-trigger')) return 
//   popover.setAttribute('hidden', true);
// })
// }