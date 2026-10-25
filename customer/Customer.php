<?php
    class Customer{
        private string $name;
        private string $email;

        public function __construct(string $name, string $email){
            $this->name = trim($name);
            $this->email = trim($email);
        }

        public function getName(){
            return $this->name;
        }

        public function getEmail(){
            return $this->email;
        }
    }

?>