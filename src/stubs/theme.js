module.exports = {
    'alert': {
        'class': 'flex items-center border-l-4 p-4 min-h-32 border relative',
        'variants': {
            'default': 'bg-white',
            'danger': 'bg-red-100 text-red-800 border-red-500',
            'info': 'bg-blue-100 text-blue-800 border-blue-500',
            'warning': 'bg-yellow-100 text-yellow-800 border-yellow-500',
            'success': 'bg-green-100 text-green-800 border-green-500'
        },
        'children': {
            'progress': {
                'class': 'absolute top-0 left-0 h-full w-full',
                'children': {
                    'progressBar': {
                        'class': 'h-full w-full transition-all duration-1000 ease-linear opacity-50 text-xs',
                        'variants': {
                            'default': 'bg-gray-200',
                            'danger': 'bg-red-200',
                            'info': 'bg-blue-200',
                            'warning': 'bg-yellow-200',
                            'success': 'bg-green-200'
                        }
                    }
                }
            },
            'icon': {
                'class': 'flex-shrink-0 mr-4 z-10'
            },
            'body': {
                'class': 'flex-1 z-10'
            },
            'remainingDuration': {
                'class': 'ml-4 italic flex-shrink-0'
            },
            'dismissButton': {
                'class': 'ml-4 flex-shrink-0 font-bold text-xl leading-none cursor-pointer select-none z-10'
            }
        }
    },
    'badge': {
        'class': 'py-1 px-2 text-xs rounded uppercase tracking-wide font-medium border inline-block',
        'variants': {
            'default': 'bg-white text-gray-600',
            'info': 'bg-blue-100 text-blue-600 border-blue-200',
            'warning': 'bg-yellow-100 text-yellow-600 border-yellow-400',
            'danger': 'bg-red-100 text-red-600 border-red-200',
            'success': 'bg-green-100 text-green-600 border-green-200'
        }
    },
    'code': {
        'class': 'relative',
        'children': {
            'pre': {
                'class': 'rounded',
                'children': {
                    'code': {
                        'class': 'rounded block bg-gray-800 text-white text-sm md:text-base p-4 leading-sm'
                    }
                }
            },
            'language': {
                'class': 'absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin hidden md:block'
            },
            'caption': {
                'class': 'mt-2 text-xs uppercase text-gray-500 ml-4'
            }
        }
    },
    'codeDemo': {
        'children': {
            'wrapper': {
                'class': 'border rounded-lg',
                'children': {
                    'demo': {
                        'class': 'm-4'
                    },
                    'code': {
                        'class': 'relative',
                        'children': {
                            'pre': {
                                'class': 'rounded rounded-t-none',
                                'children': {
                                    'code': {
                                        'class': 'rounded-b block bg-gray-800 text-white text-sm md:text-base p-4 leading-sm'
                                    }
                                }
                            },
                            'language': {
                                'class': 'absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin hidden md:block'
                            },
                            'caption': {
                                'class': 'hidden'
                            }
                        }
                    }
                }
            },
            'caption': {
                'class': 'mt-2 text-xs uppercase text-gray-500 ml-4'
            }
        }
    },
    'content': {
        'class': 'direct-children:mb-4'
    },
    'heading': {
        'class': 'flex items-center',
        'variants': {
            'h1': 'mb-4 border-b text-4xl w-full',
            'h2': 'my-4 text-3xl',
            'h3': 'my-4 text-2xl',
            'h4': 'my-1 text-xl',
            'h5': 'my-0 text-normal',
            'h6': 'my-0 text-sm'
        },
        'children': {
            'number': {
                'class': 'inline-block bg-gray-700 text-base text-white h-6 w-6 rounded-full inline-flex justify-center items-center mr-2'
            },
            'anchor': {
                'class': 'ml-2 text-gray-500 text-xl cursor-pointer'
            }
        }
    },
    'input': {
        'children': {
            'label': {
                'class': 'font-bold block pb-1',
                'children': {
                    'input': {
                        'class': 'border w-full p-2 rounded-md'
                    }
                }
            }
        }
    }
};