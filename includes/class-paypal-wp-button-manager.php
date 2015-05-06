<?php

/**
 * The core plugin class.
 *
 * This is used to define internationalization, dashboard-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    paypal-wp-button-manager
 * @subpackage paypal-wp-button-manager/includes
 * @author     Angell EYE <service@angelleye.com>
 */
class AngellEYE_PayPal_WP_Button_Manager {

    /**
     * The loader that's responsible for maintaining and registering all hooks that power
     * the plugin.
     *
     * @since    0.1.0
     * @access   protected
     * @var      AngellEYE_PayPal_WP_Button_Manager_Loader    $loader    Maintains and registers all hooks for the plugin.
     */
    protected $loader;

    /**
     * The unique identifier of this plugin.
     *
     * @since    0.1.0
     * @access   protected
     * @var      string    $plugin_name    The string used to uniquely identify this plugin.
     */
    protected $plugin_name;

    /**
     * The current version of the plugin.
     *
     * @since    0.1.0
     * @access   protected
     * @var      string    $version    The current version of the plugin.
     */
    protected $version;

    /**
     * Define the core functionality of the plugin.
     *
     * Set the plugin name and the plugin version that can be used throughout the plugin.
     * Load the dependencies, define the locale, and set the hooks for the Dashboard and
     * the public-facing side of the site.
     *
     * @since    0.1.0
     */
    public function __construct() {

        $this->plugin_name = 'paypal-wp-button-manager';
        $this->version = '0.1.1';

        $this->load_dependencies();
        $this->set_locale();
        $this->define_admin_hooks();
        $this->define_public_hooks();
    }

    /**
     * Load the required dependencies for this plugin.
     *
     * Include the following files that make up the plugin:
     *
     * - AngellEYE_PayPal_WP_Button_Manager_Loader. Orchestrates the hooks of the plugin.
     * - AngellEYE_PayPal_WP_Button_Manager_i18n. Defines internationalization functionality.
     * - AngellEYE_PayPal_WP_Button_Manager_Admin. Defines all hooks for the dashboard.
     * - AngellEYE_PayPal_WP_Button_Manager_Public. Defines all hooks for the public side of the site.
     *
     * Create an instance of the loader which will be used to register the hooks
     * with WordPress.
     *
     * @since    0.1.0
     * @access   private
     */
    private function load_dependencies() {

        /**
         * The class responsible for orchestrating the actions and filters of the
         * core plugin.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-paypal-wp-button-manager-loader.php';

        /**
         * The class responsible for writing log in log file.
         * core plugin.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-paypal-wp-button-manager-logger.php';

        /**
         * The class responsible for defining internationalization functionality
         * of the plugin.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-paypal-wp-button-manager-i18n.php';

        /**
         * The class responsible for defining all actions that occur in the Dashboard.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/class-paypal-wp-button-manager-admin.php';

        /**
         * The class responsible for defining all actions that occur in the public-facing
         * side of the site.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'public/class-paypal-wp-button-manager-public.php';

        /**
         * Custom functions returns in file
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/paypal-wp-button-manager-functions.php';
        /**
         * PayPal button generator interface code written
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/partials/paypal-wp-button-manager-html-format.php';

        /**
         * PayPal button generator file included.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/partials/BMCreateButton.php';

        /**
         * PayPal button generator custom functions define in this file.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/partials/paypal-wp-button-manager-paypal-helper.php';
        /**
         * Autoload file included for paypal intigrate paypal library.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/partials/autoload.php';

        /**
         * PayPal php class file included.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/partials/PayPal.php';

        $this->loader = new AngellEYE_PayPal_WP_Button_Manager_Loader();
    }

    /**
     * Define the locale for this plugin for internationalization.
     *
     * Uses the AngellEYE_PayPal_WP_Button_Manager_i18n class in order to set the domain and to register the hook
     * with WordPress.
     *
     * @since    0.1.0
     * @access   private
     */
    private function set_locale() {

        $plugin_i18n = new AngellEYE_PayPal_WP_Button_Manager_i18n();
        $plugin_i18n->set_domain($this->get_plugin_name());

        $this->loader->add_action('plugins_loaded', $plugin_i18n, 'load_plugin_textdomain');
    }

    /**
     * Register all of the hooks related to the dashboard functionality
     * of the plugin.
     *
     * @since    0.1.0
     * @access   private
     */
    private function define_admin_hooks() {

        $plugin_admin = new AngellEYE_PayPal_WP_Button_Manager_Admin($this->get_plugin_name(), $this->get_version());

        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');
        $this->loader->add_action('admin_notices', $plugin_admin, 'paypal_wp_button_manager_notice_display');
        $this->loader->add_filter('post_updated_messages', $plugin_admin, 'paypal_wp_button_manager_success_notice_display');
        $this->loader->add_filter('admin_init', $plugin_admin, 'paypal_wp_button_manager_shortcode_button_init');
        $this->loader->add_filter('admin_footer', $plugin_admin, 'paypal_wp_button_manager_print_shortcodes_in_js');
        $this->loader->add_filter('admin_head', $plugin_admin, 'paypal_wp_button_manager_print_mynote');
        $this->loader->add_filter('wp_ajax_create_viewcart_action', $plugin_admin, 'paypal_wp_button_manager_create_viewcart_action');
        $this->loader->add_filter('wp_trash_post', $plugin_admin, 'paypal_wp_button_manager_wp_trash_post');
    }

    /**
     * Register all of the hooks related to the public-facing functionality
     * of the plugin.
     *
     * @since    0.1.0
     * @access   private
     */
    private function define_public_hooks() {

        $plugin_public = new AngellEYE_PayPal_WP_Button_Manager_Public($this->get_plugin_name(), $this->get_version());

        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_styles');
        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
    }

    /**
     * Run the loader to execute all of the hooks with WordPress.
     *
     * @since    0.1.0
     */
    public function run() {
        $this->loader->run();
    }

    /**
     * The name of the plugin used to uniquely identify it within the context of
     * WordPress and to define internationalization functionality.
     *
     * @since     1.0.0
     * @return    string    The name of the plugin.
     */
    public function get_plugin_name() {
        return $this->plugin_name;
    }

    /**
     * The reference to the class that orchestrates the hooks with the plugin.
     *
     * @since     1.0.0
     * @return    AngellEYE_PayPal_WP_Button_Manager_Loader    Orchestrates the hooks of the plugin.
     */
    public function get_loader() {
        return $this->loader;
    }

    /**
     * Retrieve the version number of the plugin.
     *
     * @since     1.0.0
     * @return    string    The version number of the plugin.
     */
    public function get_version() {
        return $this->version;
    }

}