export const transition1 = {
  duration: .75,
  ease: "easeOut"
};

export const transition2 = {
  duration: .10,
  ease: "easeOut"
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}
export const container2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2
    }
  }
}

export const item = {
  hidden: { y: '-100%'},
  show: {
    y: '0%',
    transition: { duration: 0.5 }
  }
}
export const item2 = {
  hidden: { x: '-100%'},
  show: {
    x: '0%',
    transition: { duration: 0.5 }
  }
}