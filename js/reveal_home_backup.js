$(document).ready(function(){

    (function () {
        // Fake loading.
        setTimeout(init, 1000);
    
        function init() {
            document.body.classList.remove("loading");
    
            //************************ Example 1 - reveal on load ********************************
    
            var rev1 = new RevealFx(document.querySelector("#rev-1"), {
                revealSettings: {
                    bgcolor: "#F05E00",
                    onCover: function (contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    },
                },
            });
            rev1.reveal();
    
            var rev2 = new RevealFx(document.querySelector("#rev-2"), {
                revealSettings: {
                    bgcolor: "#F2BA01",
                    delay: 250,
                    onCover: function (contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    },
                },
            });
            rev2.reveal();
    
            var revVideo = new RevealFx(document.querySelector("#revVideo"), {
                revealSettings: {
                    bgcolor: "#083D62",
                    delay: 550,
                    direction: "rl",
                    onCover: function (contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    },
                },
            });
            revVideo.reveal();
    
            //************************ Example 2 - reveal on scroll ********************************
    
            // var scrollElemToWatch_1 = document.getElementById("rev-3"),
            //     watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),
            //     rev3 = new RevealFx(scrollElemToWatch_1, {
            //         revealSettings: {
            //             bgcolor: "#F05E00",
            //             direction: "rl",
            //             onCover: function (contentEl, revealerEl) {
            //                 contentEl.style.opacity = 1;
            //             },
            //         },
            //     }),
            //     rev4 = new RevealFx(document.querySelector("#rev-4"), {
            //         revealSettings: {
            //             bgcolor: "#F2BA01",
            //             delay: 250,
            //             onCover: function (contentEl, revealerEl) {
            //                 contentEl.style.opacity = 1;
            //             },
            //         },
            //     });
                // rev5 = new RevealFx(document.querySelector("#rev-5"), {
                //     revealSettings: {
                //         bgcolor: "#F05E00",
                //         delay: 750,
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // }),
                // rev6 = new RevealFx(document.querySelector("#rev-6"), {
                //     revealSettings: {
                //         bgcolor: "#F2BA01",
                //         delay: 500,
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // })
    
                // var scrollElemToWatch_1 = document.getElementById("rev-5"),
                // watcher_2 = scrollMonitor.create(scrollElemToWatch_1, 500),
                // rev5 = new RevealFx(scrollElemToWatch_1, {
                //     revealSettings: {
                //         bgcolor: "#F05E00",
                //         direction: "rl",
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // });
                // var scrollElemToWatch_1 = document.getElementById("rev-6"),
                // watcher_3 = scrollMonitor.create(scrollElemToWatch_1, 750),
                // rev6 = new RevealFx(scrollElemToWatch_1, {
                //     revealSettings: {
                //         bgcolor: "#F05E00",
                //         direction: "rl",
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // });
                // scrollElemToWatch_2 = document.getElementById("rev-6"),
                // watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),
                // rev6 = new RevealFx(scrollElemToWatch_2, {
                //     revealSettings: {
                //         bgcolor: "#fcf652",
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // }),
                // rev7 = new RevealFx(document.querySelector("#rev-7"), {
                //     revealSettings: {
                //         bgcolor: "#7f40f1",
                //         direction: "rl",
                //         delay: 250,
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // }),
                // rev8 = new RevealFx(document.querySelector("#rev-8"), {
                //     revealSettings: {
                //         bgcolor: "#7f40f1",
                //         direction: "rl",
                //         delay: 500,
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // }),
                // scrollElemToWatch_3 = document.getElementById("rev-9"),
                // watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300),
                // rev9 = new RevealFx(scrollElemToWatch_3, {
                //     revealSettings: {
                //         bgcolor: "#fcf652",
                //         direction: "rl",
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // }),
                // rev10 = new RevealFx(document.querySelector("#rev-10"), {
                //     revealSettings: {
                //         bgcolor: "#7f40f1",
                //         delay: 250,
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // }),
                // rev11 = new RevealFx(document.querySelector("#rev-11"), {
                //     revealSettings: {
                //         bgcolor: "#7f40f1",
                //         delay: 500,
                //         onCover: function (contentEl, revealerEl) {
                //             contentEl.style.opacity = 1;
                //         },
                //     },
                // });
    
            // watcher_1.enterViewport(function () {
            //     rev3.reveal();
            //     rev4.reveal();
            //     watcher_1.destroy();
            // });
            // watcher_2.enterViewport(function () {
            //     rev5.reveal();
            //     watcher_1.destroy();
            // });
            // watcher_3.enterViewport(function () {
            //     rev6.reveal();
            //     watcher_1.destroy();
            // });
            // watcher_2.enterViewport(function () {
            //     rev6.reveal();
            //     rev7.reveal();
            //     rev8.reveal();
            //     watcher_2.destroy();
            // });
            // watcher_3.enterViewport(function () {
            //     rev9.reveal();
            //     rev10.reveal();
            //     rev11.reveal();
            //     watcher_3.destroy();
            // });
    
            //************************ Example 3 - api examples ********************************
    
            
        }
    
        var modalEl = document.querySelector('.reveal-modal'),
                    revealer = new RevealFx(modalEl),
                    deleteCtrl = modalEl.querySelector('.btn--default'),
                    closeCtrl = modalEl.querySelector('.btn--reveal-modal-close');
    
                document.querySelector('.btn--reveal-modal-open').addEventListener('click', function() {
                    modalEl.classList.add('reveal-modal--open');
                    revealer.reveal({
                        bgcolor: '#F05E00',
                        direction: 'tb',
                        duration: 400, 
                        easing: 'easeOutCirc',
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        },
                        onComplete: function() {
                            closeCtrl.addEventListener('click', closeModal);
                            deleteCtrl.addEventListener('click', closeModal);
                        }
                    });
                });
    
                function closeModal(ev) {
                    closeCtrl.removeEventListener('click', closeModal);
                    deleteCtrl.removeEventListener('click', closeModal);
                    modalEl.classList.remove('reveal-modal--open');
                    revealer.reveal({
                        bgcolor: ev.target.classList.contains('btn--reveal-modal-close') ? '#2A72C7' : '#40f180',
                        direction: 'bt',
                        duration: ev.target.classList.contains('btn--reveal-modal-close') ? 200 : 400, 
                        easing: 'easeOutCirc',
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 0;
                        },
                        onComplete: function() {
                            modalEl.classList.remove('reveal-modal--open');
                        }
                    });
                }
    })();
    
    });