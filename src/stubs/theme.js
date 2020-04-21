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
    'button': {
        'class': 'pt-10',
        'variants': {
            'default': 'bg-gray-200',
            'danger': 'bg-red-200',
            'info': 'bg-blue-200',
            'warning': 'bg-yellow-200',
            'success': 'bg-green-200'
        }
    }
};