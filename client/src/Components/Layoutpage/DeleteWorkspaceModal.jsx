import { Button, CloseButton, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import axios from 'axios'

export default function DeleteWorkspaceModal({ open, workspaceId }) {
    const [isOpen, setIsOpen] = useState(open);
    const [isLoading, setIsLoading] = useState(false);

    // function open() {
    //     setIsOpen(true)
    // }

    function close() {
        setIsOpen(false)
    }

    const handleDelete = async (workspaceId) => {
        setIsOpen(true)
        setIsLoading(true);
        let type ="workspace";
        try {
            await axios.delete(
                `${import.meta.env.VITE_ENDPOINT_URL}workspaces/${workspaceId}?type=${encodeURIComponent(type)}`,
                //import.meta.env.VITE_ENDPOINT_URL + "workspaces/" + workspaceId,
                {
                    headers: {
                        'Content-Type': undefined,
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                    },

                },
            ).then((res) => {
                console.log("response>>>>", res)
                setIsOpen(false);
                setIsLoading(false)
            });
        } catch (error) {
            console.log("errr", error)
            setIsLoading(false)
        }
    }

    return (
        <>
            <Transition appear show={isOpen}>
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4">
                                <TransitionChild
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 transform-[scale(95%)]"
                                    enterTo="opacity-100 transform-[scale(100%)]"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 transform-[scale(100%)]"
                                    leaveTo="opacity-0 transform-[scale(95%)]"
                                >
                                    <DialogPanel className="w-[25%] max-w-md rounded-xl bg-white text-black p-6 backdrop-blur-2xl">
                                        <DialogTitle as="h2" className="text-base/7 font-medium text-black text-start">
                                            <CloseButton
                                                onClick={close}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.553446 0.553432C-0.184482 1.29136 -0.184482 2.48775 0.553446 3.22568L7.32776 9.99996L0.553446 16.7744C-0.184482 17.5123 -0.184482 18.7087 0.553446 19.4466C1.29135 20.1845 2.48776 20.1845 3.22567 19.4466L9.99997 12.6722L16.7744 19.4466C17.5123 20.1845 18.7087 20.1845 19.4466 19.4466C20.1845 18.7087 20.1845 17.5123 19.4466 16.7744L12.6722 9.99996L19.4466 3.2257C20.1845 2.48779 20.1845 1.29138 19.4466 0.55347C18.7086 -0.184458 17.5123 -0.184458 16.7744 0.55347L9.99997 7.32775L3.22567 0.553432C2.48776 -0.184477 1.29135 -0.184477 0.553446 0.553432Z" fill="#D9D9D9" />
                                                </svg>
                                            </CloseButton>

                                        </DialogTitle>
                                        <div className="text-base/7 font-medium text-black text-center">
                                            Are you sure you want to <br /> delete this workspace?
                                        </div>
                                        <div className="mt-4">
                                            <Button
                                                 className="cancel-delete-btn"
                                                onClick={close}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                className="delete-btn"
                                                onClick={handleDelete}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </Transition>
        </>
    )
}