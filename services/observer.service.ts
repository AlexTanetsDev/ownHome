class ObserverService {
  constructor() {}
  private options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25,
  };

  public setTranslateObserver = (callBack: () => void, target: Element) => {
    const observer = new IntersectionObserver(callBack, this.options);
    observer.observe(target);
  };
}

const service = new ObserverService();
export default service;
